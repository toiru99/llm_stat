---
type: Model
title: GPT-5.4 mini (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.6525
output_speed_tps: 167.704755509428
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 67.2, z: 0.96, r: 64.4, estimated: false }  # 전문 지식
  reasoning: { s: 51.6, z: 0.79, r: 61.8, estimated: false }  # 추론
  coding: { s: 76.0, z: 1.22, r: 68.3, estimated: false }  # 코딩
  agentic: { s: 68.9, z: 0.83, r: 62.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 78.4, z: 0.36, r: 55.4, estimated: false }  # 멀티모달
  long_context: { s: 86.8, z: 0.99, r: 64.8, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.34, r: 70.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# GPT-5.4 mini (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 코딩
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 167.704755509428 t/s · TTFT 111.906229998286s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.4 | +0.96 | 실측 | [[gpqa-diamond]] 87.4747474747475%×0.4, [[humanitys-last-exam]] 28.127896200185397%×0.3 |
| 추론 | 61.8 | +0.79 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 87.4747474747475%×1.0, [[humanitys-last-exam]] 28.127896200185397%×1.0 |
| 코딩 | 68.3 | +1.22 | 실측 | [[scicode]] 52.0833333333333%×1.0, [[terminal-bench]] 52.2727272727273%×0.5 |
| 에이전트 | 62.5 | +0.83 | 실측 | [[gdpval]] 1021.23%×1.0, [[tau2-bench]] 83.3333333333333%×1.0, [[tau3-banking]] 25.5670103092783%×1.0, [[terminal-bench]] 52.2727272727273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 55.4 | +0.36 | 실측 | [[mmmu-pro]] 73.2947976878613%×1.0 |
| 긴문맥 | 64.8 | +0.99 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 70.1 | +1.34 | 실측 | [[ifbench]] 73.265306122449%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
