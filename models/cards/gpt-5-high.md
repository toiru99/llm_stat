---
type: Model
title: GPT-5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 1.34
output_speed_tps: 91.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 69.0, z: 1.39, r: 70.9, estimated: false }  # 전문 지식
  reasoning: { s: 52.7, z: 1.02, r: 65.3, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.78, r: 61.7, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.95, r: 64.3, estimated: false }  # 에이전트
  trust: { s: 20.0, z: -0.37, r: 44.4, estimated: false }  # 신뢰성
  multimodal: { s: 85.5, z: 0.67, r: 60.1, estimated: false }  # 멀티모달
  long_context: { s: 100.0, z: 1.53, r: 73.0, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.38, r: 70.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-13
timestamp: 2026-07-13T00:00:00Z
---

# GPT-5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **35.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · 91.0 t/s · TTFT 85.14s · 400k ctx` · 가성비 26.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.9 | +1.39 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 85.0%×0.4, [[humanitys-last-exam]] 27.0%×0.3 |
| 추론 | 65.3 | +1.02 | 실측 | [[critpt]] 6.0%×1.0, [[gpqa-diamond]] 85.0%×1.0, [[humanitys-last-exam]] 27.0%×1.0 |
| 코딩 | 61.7 | +0.78 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 64.3 | +0.95 | 실측 | [[gdpval]] 29.0%×1.0, [[tau2-bench]] 85.0%×1.0, [[tau3-banking]] 20.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 44.4 | -0.37 | 실측 | [[aa-omniscience]] 18.0%×1.0 |
| 멀티모달 | 60.1 | +0.67 | 실측 | [[mmmu-pro]] 74.0%×1.0 |
| 긴문맥 | 73.0 | +1.53 | 실측 | [[aa-lcr]] 76.0%×1.0 |
| 지시 따르기 | 70.7 | +1.38 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
