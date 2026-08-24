---
type: Model
title: GPT-5.2 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 1.8725
output_speed_tps: 83.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.8, z: 1.54, r: 73.0, estimated: false }  # 전문 지식
  reasoning: { s: 66.7, z: 1.51, r: 72.7, estimated: false }  # 추론
  coding: { s: 81.5, z: 1.34, r: 70.1, estimated: false }  # 코딩
  agentic: { s: 78.5, z: 1.6, r: 74.0, estimated: false }  # 에이전트
  trust: { s: 19.8, z: -0.36, r: 44.7, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.34, r: 70.1, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.4, r: 71.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-24
timestamp: 2026-08-24T00:00:00Z
---

# GPT-5.2 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **43.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 83.0 t/s · TTFT 141.32s · 400k ctx` · 가성비 23.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 73.0 | +1.54 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 72.7 | +1.51 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 70.1 | +1.34 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 74.0 | +1.6 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 44.7 | -0.36 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.1 | +1.34 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 71.0 | +1.4 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
