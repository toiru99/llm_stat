---
type: Model
title: GPT-5 mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 18.0
price_blended_usd_1m: 0.2675
output_speed_tps: 107.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.0, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 39.8, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 44.4, z: 0.27, r: 54.0, estimated: false }  # 에이전트
  trust: { s: 43.3, z: 0.89, r: 63.3, estimated: false }  # 신뢰성
  multimodal: { s: 76.4, z: 0.31, r: 54.6, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.98, r: 64.7, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5 mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **18.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 107.0 t/s · TTFT 105.71s · 400k ctx` · 가성비 67.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 54.0 | +0.27 | 실측 | [[gdpval]] 19.0%×1.0, [[tau2-bench]] 68.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 63.3 | +0.89 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | 54.6 | +0.31 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 64.7 | +0.98 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
