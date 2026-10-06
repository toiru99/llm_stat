---
type: Model
title: GPT-5.4 mini (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 0.6525
output_speed_tps: 240.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 61.5, z: 0.88, r: 63.1, estimated: false }  # 전문 지식
  reasoning: { s: 55.3, z: 0.85, r: 62.8, estimated: false }  # 추론
  coding: { s: 76.3, z: 1.36, r: 70.4, estimated: false }  # 코딩
  agentic: { s: 62.1, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.85, r: 37.3, estimated: false }  # 신뢰성
  multimodal: { s: 79.5, z: 0.4, r: 56.0, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.31, r: 69.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GPT-5.4 mini (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 240.0 t/s · TTFT 128.4s · 400k ctx` · 가성비 36.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.1 | +0.88 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 62.8 | +0.85 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 70.4 | +1.36 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[apex-agents]] 28.0%×1.0, [[gdpval]] 26.0%×1.0, [[itbench]] 35.0%×1.0, [[tau2-bench]] 83.0%×1.0, [[tau3-banking]] 26.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 37.3 | -0.85 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 56.0 | +0.4 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 69.7 | +1.31 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
