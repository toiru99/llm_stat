---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 3.08
output_speed_tps: 91.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.7, z: 1.99, r: 79.9, estimated: false }  # 전문 지식
  reasoning: { s: 78.9, z: 1.93, r: 78.9, estimated: false }  # 추론
  coding: { s: 87.4, z: 1.74, r: 76.1, estimated: false }  # 코딩
  agentic: { s: 78.9, z: 1.53, r: 73.0, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.9, r: 36.6, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 89.9, z: 1.16, r: 67.3, estimated: false }  # 긴문맥
  instruction: { s: 81.7, z: 1.14, r: 67.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-06
timestamp: 2026-10-06T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 91.0 t/s · TTFT 3.83s · 1M ctx` · 가성비 12.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 79.9 | +1.99 | 실측 | [[aa-omniscience]] 58.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 78.9 | +1.93 | 실측 | [[critpt]] 23.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 76.1 | +1.74 | 실측 | [[scicode]] 57.0%×1.0, [[terminal-bench]] 63.0%×0.5 |
| 에이전트 | 73.0 | +1.53 | 실측 | [[gdpval]] 46.0%×1.0, [[tau2-bench]] 81.0%×1.0, [[tau3-banking]] 36.0%×1.0, [[terminal-bench]] 63.0%×1.0 |
| 신뢰성 | 36.6 | -0.9 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 67.3 | +1.16 | 실측 | [[aa-lcr]] 80.0%×1.0 |
| 지시 따르기 | 67.0 | +1.14 | 실측 | [[ifbench]] 70.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
