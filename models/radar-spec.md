---
type: Spec
title: 모델 레이더 8축 정의 & 집계 방법론 (SSOT)
description: 레이더 8축 키, 정규화→가중평균 집계 규칙, 결측 처리. 축↔벤치마크 매핑은 각 벤치마크 문서가 선언.
resource: https://artificialanalysis.ai/leaderboards/models
timestamp: 2026-06-23T00:00:00Z
---

# 8축 (canonical keys)

레이더 다각형은 아래 8축을 **이 순서대로** 그린다. 벤치마크 문서의 `axes:` 가 이 key를 참조한다.

| # | key | 라벨 | 성격 |
|---|---|---|---|
| 1 | `knowledge` | 전문 지식 | 여러 도메인의 사실 지식 폭 |
| 2 | `reasoning` | 추론 | 고난도 다분야 추론 |
| 3 | `coding` | 코딩 | 코드 생성·구현 |
| 4 | `agentic` | 에이전트 | 도구 사용·다단계 실무 수행 |
| 5 | `trust` | 신뢰성 | 환각 회피(틀린 걸 자신있게 말하지 않음) |
| 6 | `multimodal` | 멀티모달 | 이미지·시각 자료 이해 |
| 7 | `long_context` | 긴문맥 | 대량 문서 통합 추론 |
| 8 | `instruction` | 지시 따르기 | 형식·제약 정확 준수 |

> 다국어는 소스에 점수가 없어 제외. 한국어 핵심 축은 추후 자체 평가로 추가.

# 매핑 SSOT = 벤치마크 문서

축↔벤치마크 매핑은 **여기 표로 두지 않는다.** 각 벤치마크 문서(`benchmarks/*.md`)의 frontmatter가 스스로 선언한다:

```yaml
column: "GPQA Diamond"              # 기본 리더보드 열(스크래퍼가 읽는 부분일치 키)
axes:
  - { axis: reasoning, weight: 1.0 }   # 주 기여
  - { axis: knowledge, weight: 0.4 }   # 부 기여 (과학 지식 측면)
```

한 벤치마크가 **여러 축**에 가중치로 기여할 수 있고, 한 축에 **여러 벤치마크**가 모일 수 있다. 축 구성을 바꾸려면 코드가 아니라 해당 벤치마크 문서의 `axes:`만 수정한다. `build_cards.py`가 모든 벤치마크 문서를 읽어 매핑을 구성한다.

**다중 메트릭 벤치마크(per-axis column 오버라이드):** 한 벤치마크가 서로 다른 열로 여러 축에 기여하면, 축 항목에 `column`을 직접 지정한다(없으면 상단 기본 `column` 사용). 예 — AA-Omniscience는 한 평가에서 두 지표가 나온다:

```yaml
# (top-level column 생략 가능)
axes:
  - { axis: knowledge, weight: 1.0, column: "AA-Omniscience Accuracy" }
  - { axis: trust,     weight: 1.0, column: "AA-Omniscience Non-Hallucination" }
```

# 집계 방법론

축 점수는 **"정규화 후 가중평균, 있는 것만"**으로 계산한다.

1. **정규화(벤치마크 단위)**: 각 벤치마크 열을 추적 모델 집단 기준 **min-max → 0~100**. (raw %를 그대로 평균하면 난이도 차로 쉬운 벤치마크가 축을 지배하므로 금지.)
2. **가중평균(축 단위)**: 축 `a`의 점수 = 그 축에 기여하는 벤치마크들 중 **값이 있는 것만**, 정규화값을 가중치로 가중평균.
   `axis_score(model,a) = Σ wᵢ·normᵢ / Σ wᵢ` (값 있는 i에 한해)
3. **결측 처리**: 축에 기여하는 벤치마크가 하나도 없으면 → `null` = "측정 안 됨"(다각형 점선/회색). **다른 축에서 끌어오는 교차 보간은 하지 않는다**(상관 가정은 신뢰를 깨므로). 단일 소스 축(멀티모달·긴문맥·신뢰성·지시·전문지식)은 그 소스가 없으면 그대로 결측.

# 레이더 표현 — 평균 기준선(baseline) 산식

다각형은 절대 점수가 아니라 **"모델 평균 대비 얼마나 더 나은가"**로 그린다. 평균선을 기준 다각형으로 깔고, 각 모델이 그보다 얼마나 바깥인지를 표시한다.

축 `a`에 대해, 값이 있는 모델 집단에서:

1. 축 집계값(위 가중평균) `s`의 **평균 μₐ, 표준편차 σₐ** 계산.
2. 모델 `m`의 축 상대점수: **z = (s − μₐ) / σₐ** (0 = 평균, +면 평균보다 우수).
3. 다각형 반경(0~100, 음수 방지): **r = clamp(50 + 15·z, 0, 100)** — IQ식. **50 = 평균 기준선 ring**, 1σ당 15점.
4. 소비자용 보조 표기로 **백분위(상위 %)**도 함께 저장.

→ 모든 카드가 같은 평균선(50 ring)을 공유하므로, 모델 간 "어느 축이 평균보다 두드러지는가"가 한눈에 비교된다. `build_cards.py`는 축별 `{ raw, norm(min-max), z, r, pct }` 와 전역 축별 `{ mean, std }`(기준선)를 함께 출력한다.

# 카드 표기

- 다각형: 8축의 **평균기준 반경 r**(50=평균선). 기준선 다각형 함께 표시.
- 표: 축별 집계값 + z/백분위 + **구성 벤치마크 내역**(각 벤치마크 raw % 와 가중치). 어떤 벤치마크로 계산됐는지 투명하게.

# 헤드라인 배지 (레이더 밖)

| 배지 | 리더보드 열 | 표기 |
|---|---|---|
| 종합지능 | `Artificial Analysis Intelligence Index` | 정수 |
| 비용 | `Blended USD/1M Tokens` | `$X/1M` |
| 속도 | `Median Tokens/s` | `X t/s` |
| 컨텍스트 | `Context Window` | `Xk/M` |
| 제작사 / 라이선스 | `Creator` / `License` | 텍스트 |
| 가성비(파생) | 종합지능 ÷ 비용 | 별도 |

# 출처 표기 의무

데이터 노출 화면에 **"출처: artificialanalysis.ai"** 표기.

# Citations

[1] [Artificial Analysis LLM Leaderboard](https://artificialanalysis.ai/leaderboards/models)
