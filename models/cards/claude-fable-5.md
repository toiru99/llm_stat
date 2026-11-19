---
type: Model
title: Claude Fable 5
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 7.7
output_speed_tps: 85.0104262531483
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 86.6, z: 1.89, r: 78.4, estimated: false }  # 전문 지식
  reasoning: { s: 83.4, z: 2.36, r: 85.3, estimated: false }  # 추론
  coding: { s: 91.1, z: 1.73, r: 76.0, estimated: false }  # 코딩
  agentic: { s: 89.5, z: 1.54, r: 73.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.17, r: 67.5, estimated: false }  # 긴문맥
  instruction: { s: 72.1, z: 0.76, r: 61.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Fable 5
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-19
timestamp: 2026-11-19T00:00:00Z
---

# Claude Fable 5

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $10.0 · 출력 $50.0 · 혼합 $7.7/1M · 85.0104262531483 t/s · TTFT 53.038618277726s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.4 | +1.89 | 실측 | [[gpqa-diamond]] 92.6262626262626%×0.4, [[humanitys-last-exam]] 55.468025949953706%×0.3 |
| 추론 | 85.3 | +2.36 | 실측 | [[critpt]] 28.571428570000002%×1.0, [[gpqa-diamond]] 92.6262626262626%×1.0, [[humanitys-last-exam]] 55.468025949953706%×1.0 |
| 코딩 | 76.0 | +1.73 | 실측 | [[scicode]] 60.9953703703704%×1.0, [[terminal-bench]] 62.878787878787904%×0.5 |
| 에이전트 | 73.2 | +1.54 | 실측 | [[gdpval]] 1618.04%×1.0, [[tau2-bench]] 98.5380116959064%×1.0, [[tau3-banking]] 38.144329896907195%×1.0, [[terminal-bench]] 62.878787878787904%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 67.5 | +1.17 | 실측 | [[aa-lcr]] 82.3333333333333%×1.0 |
| 지시 따르기 | 61.4 | +0.76 | 실측 | [[ifbench]] 63.469387755102005%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
