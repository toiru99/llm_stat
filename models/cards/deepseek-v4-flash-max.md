---
type: Model
title: DeepSeek V4 Flash (max)
creator: DeepSeek
license: Open
intelligence_index: 42.0
price_blended_usd_1m: 0.0736
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 284
is_reasoning: true
radar:
  knowledge: { s: 66.1, z: 1.18, r: 67.7, estimated: false }  # 전문 지식
  reasoning: { s: 59.3, z: 1.16, r: 67.4, estimated: false }  # 추론
  coding: { s: 68.2, z: 0.81, r: 62.2, estimated: false }  # 코딩
  agentic: { s: 63.7, z: 1.05, r: 65.8, estimated: false }  # 에이전트
  trust: { s: 2.3, z: -1.09, r: 33.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.3, z: 1.02, r: 65.3, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.63, r: 74.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-19
timestamp: 2026-08-19T00:00:00Z
---

# DeepSeek V4 Flash (max)

DeepSeek · Open · Large(284B) · 컨텍스트 1M · 종합지능 **42.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.13 · 출력 $0.28 · 혼합 $0.0736/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 570.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.7 | +1.18 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 35.0%×0.3 |
| 추론 | 67.4 | +1.16 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 35.0%×1.0 |
| 코딩 | 62.2 | +0.81 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 65.8 | +1.05 | 실측 | [[gdpval]] 34.0%×1.0, [[itbench]] 32.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 31.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 33.6 | -1.09 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 65.3 | +1.02 | 실측 | [[aa-lcr]] 70.0%×1.0 |
| 지시 따르기 | 74.4 | +1.63 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
