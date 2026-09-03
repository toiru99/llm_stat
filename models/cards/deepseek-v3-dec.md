---
type: Model
title: DeepSeek V3 (Dec)
creator: DeepSeek
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.413
output_speed_tps: None
context_window: 128000
status: past
size_class: Large
params_b: 671
is_reasoning: false
radar:
  knowledge: { s: 35.3, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 19.2, z: -0.77, r: 38.4, estimated: false }  # 추론
  coding: { s: 41.2, z: -0.25, r: 46.3, estimated: false }  # 코딩
  agentic: { s: 10.9, z: -1.03, r: 34.5, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.77, r: 38.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 38.6, z: -0.36, r: 44.7, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.86, r: 37.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V3 (Dec)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# DeepSeek V3 (Dec)

DeepSeek · Open · Large(671B) · 컨텍스트 128k · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 에이전트

## 실용 지표
`입력 $0.36 · 출력 $0.89 · 혼합 $0.413/1M · None t/s · TTFT Nones · 128k ctx` · 가성비 33.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 56.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 38.4 | -0.77 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 56.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 46.3 | -0.25 | 실측 | [[scicode]] 35.0%×1.0, [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 34.5 | -1.03 | 실측 | [[gdpval]] 0.0%×1.0, [[tau2-bench]] 23.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.7 | -0.36 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 37.1 | -0.86 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
