---
type: Model
title: Claude Opus 4.5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 36.0
price_blended_usd_1m: 3.85
output_speed_tps: 46.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.3, z: 0.92, r: 63.8, estimated: false }  # 전문 지식
  reasoning: { s: 34.7, z: -0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 71.2, z: 1.02, r: 65.2, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.44, r: 71.6, estimated: false }  # 에이전트
  trust: { s: 22.7, z: -0.09, r: 48.6, estimated: false }  # 신뢰성
  multimodal: { s: 78.9, z: 0.41, r: 56.2, estimated: false }  # 멀티모달
  long_context: { s: 80.7, z: 0.93, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.39, r: 44.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Claude Opus 4.5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **36.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 46.0 t/s · TTFT 1.38s · 200k ctx` · 가성비 9.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 63.8 | +0.92 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 50.0 | +-0.0 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 65.2 | +1.02 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 71.6 | +1.44 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | 48.6 | -0.09 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | 56.2 | +0.41 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 63.9 | +0.93 | 실측 | [[aa-lcr]] 67.0%×1.0 |
| 지시 따르기 | 44.2 | -0.39 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
