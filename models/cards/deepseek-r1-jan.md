---
type: Model
title: DeepSeek R1 (Jan)
creator: DeepSeek
license: Open
intelligence_index: 12.0
price_blended_usd_1m: 2.2
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 685
is_reasoning: true
radar:
  knowledge: { s: 46.3, z: 0.26, r: 53.9, estimated: false }  # 전문 지식
  reasoning: { s: 29.3, z: -0.28, r: 45.8, estimated: false }  # 추론
  coding: { s: 9.1, z: -0.81, r: 37.9, estimated: false }  # 코딩
  agentic: { s: 7.9, z: -1.13, r: 33.0, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 65.2, z: 0.49, r: 57.4, estimated: false }  # 긴문맥
  instruction: { s: 38.0, z: -0.61, r: 40.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek R1 (Jan)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# DeepSeek R1 (Jan)

DeepSeek · Open · Large(685B) · 컨텍스트 128k · 종합지능 **12.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $4.0 · 혼합 $2.2/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 5.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 53.9 | +0.26 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 45.8 | -0.28 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 37.9 | -0.81 | 실측 | [[terminal-bench]] 6.0%×0.5 |
| 에이전트 | 33.0 | -1.13 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 11.0%×1.0, [[tau3-banking]] 6.0%×1.0, [[terminal-bench]] 6.0%×1.0 |
| 신뢰성 | 38.5 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.4 | +0.49 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 40.8 | -0.61 | 실측 | [[ifbench]] 39.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
