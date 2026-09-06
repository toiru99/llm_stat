---
type: Model
title: GPT-5.2 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.8725
output_speed_tps: 77.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 71.8, z: 1.49, r: 72.3, estimated: false }  # 전문 지식
  reasoning: { s: 64.8, z: 1.43, r: 71.5, estimated: false }  # 추론
  coding: { s: 71.2, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 78.5, z: 1.57, r: 73.6, estimated: false }  # 에이전트
  trust: { s: 17.5, z: -0.33, r: 45.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.36, r: 70.4, estimated: false }  # 긴문맥
  instruction: { s: 88.7, z: 1.5, r: 72.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5.2 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 77.0 t/s · TTFT 148.29s · 400k ctx` · 가성비 18.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.3 | +1.49 | 실측 | [[aa-omniscience]] 44.0%×1.0, [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 71.5 | +1.43 | 실측 | [[critpt]] 12.0%×1.0, [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 73.6 | +1.57 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | 45.1 | -0.33 | 실측 | [[aa-omniscience]] 19.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 70.4 | +1.36 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 72.5 | +1.5 | 실측 | [[ifbench]] 75.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
