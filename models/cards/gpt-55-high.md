---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 4.35
output_speed_tps: 64.5336938516686
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.9, z: 1.62, r: 74.3, estimated: false }  # 전문 지식
  reasoning: { s: 75.9, z: 1.99, r: 79.8, estimated: false }  # 추론
  coding: { s: 84.2, z: 1.5, r: 72.5, estimated: false }  # 코딩
  agentic: { s: 83.1, z: 1.32, r: 69.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 88.8, z: 0.89, r: 63.3, estimated: false }  # 멀티모달
  long_context: { s: 95.1, z: 1.23, r: 68.5, estimated: false }  # 긴문맥
  instruction: { s: 83.6, z: 1.24, r: 68.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 64.5336938516686 t/s · TTFT 19.9137991804516s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 74.3 | +1.62 | 실측 | [[gpqa-diamond]] 93.2323232323232%×0.4, [[humanitys-last-exam]] 45.0417052826691%×0.3 |
| 추론 | 79.8 | +1.99 | 실측 | [[critpt]] 25.428571428571402%×1.0, [[gpqa-diamond]] 93.2323232323232%×1.0, [[humanitys-last-exam]] 45.0417052826691%×1.0 |
| 코딩 | 72.5 | +1.5 | 실측 | [[scicode]] 56.1342592592593%×1.0, [[terminal-bench]] 59.848484848484894%×0.5 |
| 에이전트 | 69.8 | +1.32 | 실측 | [[gdpval]] 1335.27%×1.0, [[tau2-bench]] 92.9824561403509%×1.0, [[tau3-banking]] 36.701030927835%×1.0, [[terminal-bench]] 59.848484848484894%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.3 | +0.89 | 실측 | [[mmmu-pro]] 81.0982658959538%×1.0 |
| 긴문맥 | 68.5 | +1.23 | 실측 | [[aa-lcr]] 84.3333333333333%×1.0 |
| 지시 따르기 | 68.6 | +1.24 | 실측 | [[ifbench]] 71.6326530612245%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
