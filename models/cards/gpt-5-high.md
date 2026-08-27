---
type: Model
title: GPT-5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.3375
output_speed_tps: 104.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 65.4, z: 1.14, r: 67.1, estimated: false }  # 전문 지식
  reasoning: { s: 52.3, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.64, r: 59.6, estimated: false }  # 코딩
  agentic: { s: 55.6, z: 0.7, r: 60.5, estimated: false }  # 에이전트
  trust: { s: 18.6, z: -0.43, r: 43.5, estimated: false }  # 신뢰성
  multimodal: { s: 84.3, z: 0.56, r: 58.4, estimated: false }  # 멀티모달
  long_context: { s: 91.6, z: 1.22, r: 68.3, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.28, r: 69.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-27
timestamp: 2026-08-27T00:00:00Z
---

# GPT-5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 104.0 t/s · TTFT 88.75s · 400k ctx` · 가성비 26.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.1 | +1.14 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 59.6 | +0.64 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 60.5 | +0.7 | 실측 | [[gdpval]] 29.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 22.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 43.5 | -0.43 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 58.4 | +0.56 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 68.3 | +1.22 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
