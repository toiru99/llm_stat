---
type: Model
title: GPT-5.4 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 2.175
output_speed_tps: 149.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 80.3, z: 1.9, r: 78.5, estimated: false }  # 전문 지식
  reasoning: { s: 80.5, z: 2.19, r: 82.8, estimated: false }  # 추론
  coding: { s: 87.9, z: 1.94, r: 79.2, estimated: false }  # 코딩
  agentic: { s: 77.1, z: 1.52, r: 72.8, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.87, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: 87.5, z: 0.86, r: 62.9, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.32, r: 69.9, estimated: false }  # 긴문맥
  instruction: { s: 87.3, z: 1.44, r: 71.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-06
timestamp: 2026-09-06T00:00:00Z
---

# GPT-5.4 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **43.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 149.0 t/s · TTFT 128.2s · 1M ctx` · 가성비 19.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 78.5 | +1.9 | 실측 | [[aa-omniscience]] 51.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 44.0%×0.3 |
| 추론 | 82.8 | +2.19 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 44.0%×1.0 |
| 코딩 | 79.2 | +1.94 | 실측 | [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 72.8 | +1.52 | 실측 | [[apex-agents]] 33.0%×1.0, [[gdpval]] 40.0%×1.0, [[tau2-bench]] 87.0%×1.0, [[tau3-banking]] 40.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 37.0 | -0.87 | 실측 | [[aa-omniscience]] 8.0%×1.0 |
| 멀티모달 | 62.9 | +0.86 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 69.9 | +1.32 | 실측 | [[aa-lcr]] 82.0%×1.0 |
| 지시 따르기 | 71.7 | +1.44 | 실측 | [[ifbench]] 74.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
