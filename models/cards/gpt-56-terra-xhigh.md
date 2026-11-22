---
type: Model
title: GPT-5.6 Terra (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 82.9615708951037
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 77.4, z: 1.45, r: 71.8, estimated: false }  # 전문 지식
  reasoning: { s: 75.2, z: 1.95, r: 79.3, estimated: false }  # 추론
  coding: { s: 81.6, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.18, r: 67.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 86.7, z: 0.78, r: 61.7, estimated: false }  # 멀티모달
  long_context: { s: 89.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 76.0, z: 0.93, r: 63.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Terra (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# GPT-5.6 Terra (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 82.9615708951037 t/s · TTFT 15.0453239925583s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 71.8 | +1.45 | 실측 | [[gpqa-diamond]] 90.8080808080808%×0.4, [[humanitys-last-exam]] 41.8906394810009%×0.3 |
| 추론 | 79.3 | +1.95 | 실측 | [[critpt]] 27.142857142857103%×1.0, [[gpqa-diamond]] 90.8080808080808%×1.0, [[humanitys-last-exam]] 41.8906394810009%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[scicode]] 52.3148148148148%×1.0, [[terminal-bench]] 62.878787878787904%×0.5 |
| 에이전트 | 67.7 | +1.18 | 실측 | [[gdpval]] 1456.12%×1.0, [[tau2-bench]] 80.4093567251462%×1.0, [[tau3-banking]] 29.6907216494845%×1.0, [[terminal-bench]] 62.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 61.7 | +0.78 | 실측 | [[mmmu-pro]] 79.47976878612721%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 63.9 | +0.93 | 실측 | [[ifbench]] 66.2585034013605%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
