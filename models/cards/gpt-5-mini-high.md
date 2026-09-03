---
type: Model
title: GPT-5 mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 26.0
price_blended_usd_1m: 0.2675
output_speed_tps: 101.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 48.2, z: 0.38, r: 55.6, estimated: false }  # 전문 지식
  reasoning: { s: 40.1, z: 0.26, r: 54.0, estimated: false }  # 추론
  coding: { s: 58.6, z: 0.49, r: 57.3, estimated: false }  # 코딩
  agentic: { s: 45.0, z: 0.29, r: 54.4, estimated: false }  # 에이전트
  trust: { s: 43.3, z: 0.88, r: 63.2, estimated: false }  # 신뢰성
  multimodal: { s: 77.5, z: 0.34, r: 55.2, estimated: false }  # 멀티모달
  long_context: { s: 85.5, z: 1.08, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.49, r: 72.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# GPT-5 mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **26.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 101.0 t/s · TTFT 78.82s · 400k ctx` · 가성비 97.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.6 | +0.38 | 실측 | [[aa-omniscience]] 25.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 21.0%×0.3 |
| 추론 | 54.0 | +0.26 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 21.0%×1.0 |
| 코딩 | 57.3 | +0.49 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 54.4 | +0.29 | 실측 | [[gdpval]] 22.0%×1.0, [[tau2-bench]] 68.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 63.2 | +0.88 | 실측 | [[aa-omniscience]] 44.0%×1.0 |
| 멀티모달 | 55.2 | +0.34 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 66.1 | +1.08 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 72.4 | +1.49 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
