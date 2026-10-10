---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 4.35
output_speed_tps: 81.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.7, z: 2.0, r: 80.0, estimated: false }  # 전문 지식
  reasoning: { s: 82.7, z: 2.09, r: 81.3, estimated: false }  # 추론
  coding: { s: 84.7, z: 1.64, r: 74.5, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.54, r: 73.1, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.81, r: 37.9, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 0.95, r: 64.2, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.28, r: 69.2, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.26, r: 68.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-10
timestamp: 2026-10-10T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 81.0 t/s · TTFT 27.8s · 922k ctx` · 가성비 8.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 80.0 | +2.0 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 81.3 | +2.09 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 74.5 | +1.64 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 60.0%×0.5 |
| 에이전트 | 73.1 | +1.54 | 실측 | [[gdpval]] 41.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 37.0%×1.0, [[terminal-bench]] 60.0%×1.0 |
| 신뢰성 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 64.2 | +0.95 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 69.2 | +1.28 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 68.8 | +1.26 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
