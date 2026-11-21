---
type: Model
title: GPT-5.2 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 65.3919515213983
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.6, z: 1.32, r: 69.8, estimated: false }  # 전문 지식
  reasoning: { s: 58.5, z: 1.13, r: 66.9, estimated: false }  # 추론
  coding: { s: 71.3, z: 1.06, r: 65.9, estimated: false }  # 코딩
  agentic: { s: 78.4, z: 1.16, r: 67.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.17, r: 67.6, estimated: false }  # 긴문맥
  instruction: { s: 88.9, z: 1.47, r: 72.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# GPT-5.2 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 65.3919515213983 t/s · TTFT 51.9869080053667s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.8 | +1.32 | 실측 | [[gpqa-diamond]] 90.3030303030303%×0.4, [[humanitys-last-exam]] 37.6737720111214%×0.3 |
| 추론 | 66.9 | +1.13 | 실측 | [[critpt]] 11.5510204081633%×1.0, [[gpqa-diamond]] 90.3030303030303%×1.0, [[humanitys-last-exam]] 37.6737720111214%×1.0 |
| 코딩 | 65.9 | +1.06 | 실측 | [[terminal-bench]] 46.969696969697%×0.5 |
| 에이전트 | 67.4 | +1.16 | 실측 | [[tau2-bench]] 84.7953216374269%×1.0, [[terminal-bench]] 46.969696969697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.6 | +1.17 | 실측 | [[aa-lcr]] 82.6666666666667%×1.0 |
| 지시 따르기 | 72.0 | +1.47 | 실측 | [[ifbench]] 75.4421768707483%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
