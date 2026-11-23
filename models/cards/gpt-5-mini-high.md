---
type: Model
title: GPT-5 mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.2675
output_speed_tps: 81.0346240974866
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 60.2, z: 0.62, r: 59.3, estimated: false }  # 전문 지식
  reasoning: { s: 37.4, z: 0.09, r: 51.4, estimated: false }  # 추론
  coding: { s: 52.0, z: 0.41, r: 56.1, estimated: false }  # 코딩
  agentic: { s: 50.3, z: 0.19, r: 52.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.1, z: 0.14, r: 52.1, estimated: false }  # 멀티모달
  long_context: { s: 81.6, z: 0.83, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 88.9, z: 1.47, r: 72.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# GPT-5 mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 81.0346240974866 t/s · TTFT 50.2608872288055s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.3 | +0.62 | 실측 | [[gpqa-diamond]] 82.8282828282828%×0.4, [[humanitys-last-exam]] 21.4550509731233%×0.3 |
| 추론 | 51.4 | +0.09 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 82.8282828282828%×1.0, [[humanitys-last-exam]] 21.4550509731233%×1.0 |
| 코딩 | 56.1 | +0.41 | 실측 | [[scicode]] 39.0046296296296%×1.0, [[terminal-bench]] 33.3333333333333%×0.5 |
| 에이전트 | 52.8 | +0.19 | 실측 | [[gdpval]] 772.97%×1.0, [[tau2-bench]] 68.4210526315789%×1.0, [[tau3-banking]] 15.4639175257732%×1.0, [[terminal-bench]] 33.3333333333333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.1 | +0.14 | 실측 | [[mmmu-pro]] 70.0578034682081%×1.0 |
| 긴문맥 | 62.4 | +0.83 | 실측 | [[aa-lcr]] 72.3333333333333%×1.0 |
| 지시 따르기 | 72.0 | +1.47 | 실측 | [[ifbench]] 75.4421768707483%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
