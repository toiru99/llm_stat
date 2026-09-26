---
type: Model
title: Grok 4.3 (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 14.0
price_blended_usd_1m: 0.64
output_speed_tps: 123.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 38.2, z: -0.17, r: 47.5, estimated: false }  # 전문 지식
  reasoning: { s: 25.0, z: -0.49, r: 42.6, estimated: false }  # 추론
  coding: { s: 45.2, z: 0.35, r: 55.3, estimated: false }  # 코딩
  agentic: { s: 35.6, z: -0.08, r: 48.8, estimated: false }  # 에이전트
  trust: { s: 24.7, z: -0.04, r: 49.3, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.1, r: 48.6, estimated: false }  # 멀티모달
  long_context: { s: 36.0, z: -0.45, r: 43.3, estimated: false }  # 긴문맥
  instruction: { s: 50.7, z: -0.11, r: 48.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.3 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# Grok 4.3 (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **14.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 신뢰성
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 123.0 t/s · TTFT 0.8s · 1M ctx` · 가성비 21.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.5 | -0.17 | 실측 | [[aa-omniscience]] 24.0%×1.0, [[gpqa-diamond]] 66.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 42.6 | -0.49 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 55.3 | +0.35 | 실측 | [[scicode]] 39.0%×1.0, [[terminal-bench]] 19.0%×0.5 |
| 에이전트 | 48.8 | -0.08 | 실측 | [[gdpval]] 21.0%×1.0, [[tau2-bench]] 66.0%×1.0, [[tau3-banking]] 8.0%×1.0, [[terminal-bench]] 19.0%×1.0 |
| 신뢰성 | 49.3 | -0.04 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 48.6 | -0.1 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 43.3 | -0.45 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 48.3 | -0.11 | 실측 | [[ifbench]] 48.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
