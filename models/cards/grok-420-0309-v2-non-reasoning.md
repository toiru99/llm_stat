---
type: Model
title: Grok 4.20 0309 v2 (Non-reasoning)
creator: SpaceXAI
license: Proprietary
intelligence_index: 22.0
price_blended_usd_1m: 0.64
output_speed_tps: 91.0
context_window: 2000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 52.1, z: 0.57, r: 58.5, estimated: false }  # 전문 지식
  reasoning: { s: 43.3, z: 0.45, r: 56.7, estimated: false }  # 추론
  coding: { s: 45.3, z: -0.1, r: 48.5, estimated: false }  # 코딩
  agentic: { s: 43.2, z: 0.25, r: 53.7, estimated: false }  # 에이전트
  trust: { s: 1.0, z: -1.09, r: 33.7, estimated: false }  # 신뢰성
  multimodal: { s: 71.4, z: 0.02, r: 50.3, estimated: false }  # 멀티모달
  long_context: { s: 25.3, z: -0.74, r: 38.9, estimated: false }  # 긴문맥
  instruction: { s: 52.1, z: -0.01, r: 49.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Grok 4.20 0309 v2 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-29
timestamp: 2026-08-29T00:00:00Z
---

# Grok 4.20 0309 v2 (Non-reasoning)

SpaceXAI · Proprietary · Unknown · 컨텍스트 2M · 종합지능 **22.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 긴문맥, 신뢰성

## 실용 지표
`입력 $1.25 · 출력 $2.5 · 혼합 $0.64/1M · 91.0 t/s · TTFT 0.63s · 2M ctx` · 가성비 34.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.5 | +0.57 | 실측 | [[aa-omniscience]] 27.0%×1.0, [[gpqa-diamond]] 78.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 56.7 | +0.45 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 78.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 48.5 | -0.1 | 실측 | [[scicode]] 33.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 53.7 | +0.25 | 실측 | [[tau2-bench]] 60.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 33.7 | -1.09 | 실측 | [[aa-omniscience]] 3.0%×1.0 |
| 멀티모달 | 50.3 | +0.02 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 38.9 | -0.74 | 실측 | [[aa-lcr]] 21.0%×1.0 |
| 지시 따르기 | 49.9 | -0.01 | 실측 | [[ifbench]] 49.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
