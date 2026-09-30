---
type: Model
title: GPT-5.5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 34.0
price_blended_usd_1m: 4.35
output_speed_tps: 84.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 84.8, z: 1.97, r: 79.6, estimated: false }  # 전문 지식
  reasoning: { s: 74.7, z: 1.76, r: 76.4, estimated: false }  # 추론
  coding: { s: 82.6, z: 1.61, r: 74.1, estimated: false }  # 코딩
  agentic: { s: 73.3, z: 1.34, r: 70.1, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.84, r: 37.4, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.28, r: 69.1, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-5.5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **34.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 84.0 t/s · TTFT 6.81s · 922k ctx` · 가성비 7.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.6 | +1.97 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 76.4 | +1.76 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 74.1 | +1.61 | 실측 | [[scicode]] 55.0%×1.0, [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 70.1 | +1.34 | 실측 | [[gdpval]] 36.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 37.4 | -0.84 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 69.1 | +1.28 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
