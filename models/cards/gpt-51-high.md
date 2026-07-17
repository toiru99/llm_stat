---
type: Model
title: GPT-5.1 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 1.34
output_speed_tps: 102.0
context_window: 272000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 1.24, r: 68.6, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.95, r: 64.3, estimated: false }  # 추론
  coding: { s: 70.5, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 57.9, z: 0.84, r: 62.6, estimated: false }  # 에이전트
  trust: { s: 56.5, z: 1.35, r: 70.3, estimated: false }  # 신뢰성
  multimodal: { s: 87.0, z: 0.73, r: 61.0, estimated: false }  # 멀티모달
  long_context: { s: 98.7, z: 1.48, r: 72.2, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.38, r: 70.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-17
timestamp: 2026-07-17T00:00:00Z
---

# GPT-5.1 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 272k · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.34/1M · 102.0 t/s · TTFT 33.31s · 272k ctx` · 가성비 27.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.6 | +1.24 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 64.3 | +0.95 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 62.6 | +0.84 | 실측 | [[gdpval]] 24.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 70.3 | +1.35 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 61.0 | +0.73 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 72.2 | +1.48 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 70.7 | +1.38 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
