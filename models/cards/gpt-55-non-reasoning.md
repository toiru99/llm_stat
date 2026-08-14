---
type: Model
title: GPT-5.5 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 4.35
output_speed_tps: 61.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 64.2, z: 1.09, r: 66.4, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: 0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 77.0, z: 1.18, r: 67.7, estimated: false }  # 코딩
  agentic: { s: 54.9, z: 0.72, r: 60.7, estimated: false }  # 에이전트
  trust: { s: 5.8, z: -0.94, r: 35.9, estimated: false }  # 신뢰성
  multimodal: { s: 80.0, z: 0.37, r: 55.5, estimated: false }  # 멀티모달
  long_context: { s: 69.9, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.26, r: 46.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-14
timestamp: 2026-08-14T00:00:00Z
---

# GPT-5.5 (Non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 61.0 t/s · TTFT 1.03s · 922k ctx` · 가성비 8.3

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 66.4 | +1.09 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 14.0%×0.3 |
| 추론 | 50.0 | +0.0 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 14.0%×1.0 |
| 코딩 | 67.7 | +1.18 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 60.7 | +0.72 | 실측 | [[gdpval]] 31.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 15.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 35.9 | -0.94 | 실측 | [[aa-omniscience]] 7.0%×1.0 |
| 멀티모달 | 55.5 | +0.37 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 58.0%×1.0 |
| 지시 따르기 | 46.1 | -0.26 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
