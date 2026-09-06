---
type: Model
title: GPT-5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 27.0
price_blended_usd_1m: 1.3375
output_speed_tps: 105.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.9, z: 1.11, r: 66.6, estimated: false }  # 전문 지식
  reasoning: { s: 50.8, z: 0.76, r: 61.4, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.62, r: 59.3, estimated: false }  # 코딩
  agentic: { s: 54.9, z: 0.67, r: 60.0, estimated: false }  # 에이전트
  trust: { s: 16.5, z: -0.38, r: 44.3, estimated: false }  # 신뢰성
  multimodal: { s: 81.9, z: 0.58, r: 58.7, estimated: false }  # 멀티모달
  long_context: { s: 87.6, z: 1.19, r: 67.8, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.39, r: 70.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **27.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 105.0 t/s · TTFT 68.43s · 400k ctx` · 가성비 20.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.6 | +1.11 | 실측 | [[aa-omniscience]] 40.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 61.4 | +0.76 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 59.3 | +0.62 | 실측 | [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 60.0 | +0.67 | 실측 | [[gdpval]] 26.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 22.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 44.3 | -0.38 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 58.7 | +0.58 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 67.8 | +1.19 | 실측 | [[aa-lcr]] 78.0%×1.0 |
| 지시 따르기 | 70.8 | +1.39 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
