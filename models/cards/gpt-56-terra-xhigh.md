---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 93.63651081311043
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.47, r: 72.0, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 1.97, r: 79.6, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.42, r: 71.4, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.19, r: 67.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.9, z: 0.8, r: 62.0, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 1.06, r: 65.9, estimated: false }  # 긴문맥
  instruction: { s: 76.0, z: 0.94, r: 64.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 93.63651081311043 t/s · TTFT 17.30243265397492s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.0 | +1.47 | 실측 | [[gpqa-diamond]] 90.8080808080808%×0.4, [[humanitys-last-exam]] 41.8906394810009%×0.3 |
| 추론 | 79.6 | +1.97 | 실측 | [[critpt]] 27.142857142857103%×1.0, [[gpqa-diamond]] 90.8080808080808%×1.0, [[humanitys-last-exam]] 41.8906394810009%×1.0 |
| 코딩 | 71.4 | +1.42 | 실측 | [[scicode]] 52.3148148148148%×1.0, [[terminal-bench]] 62.878787878787904%×0.5 |
| 에이전트 | 67.9 | +1.19 | 실측 | [[gdpval]] 1456.12%×1.0, [[tau2-bench]] 80.4093567251462%×1.0, [[tau3-banking]] 29.6907216494845%×1.0, [[terminal-bench]] 62.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.0 | +0.8 | 실측 | [[mmmu-pro]] 79.47976878612721%×1.0 |
| 긴문맥 | 65.9 | +1.06 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 64.0 | +0.94 | 실측 | [[ifbench]] 66.2585034013605%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
