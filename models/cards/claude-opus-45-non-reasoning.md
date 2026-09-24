---
type: Model
title: Claude Opus 4.5 (Non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 3.85
output_speed_tps: 46.0
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 59.0, z: 0.82, r: 62.3, estimated: false }  # 전문 지식
  reasoning: { s: 34.2, z: -0.07, r: 49.0, estimated: false }  # 추론
  coding: { s: 62.1, z: 0.94, r: 64.1, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 1.41, r: 71.2, estimated: false }  # 에이전트
  trust: { s: 22.7, z: -0.14, r: 47.9, estimated: false }  # 신뢰성
  multimodal: { s: 76.7, z: 0.32, r: 54.8, estimated: false }  # 멀티모달
  long_context: { s: 79.8, z: 0.89, r: 63.4, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.41, r: 43.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# Claude Opus 4.5 (Non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 46.0 t/s · TTFT 1.23s · 200k ctx` · 가성비 6.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 62.3 | +0.82 | 실측 | [[aa-omniscience]] 41.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 49.0 | -0.07 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 64.1 | +0.94 | 실측 | [[terminal-bench]] 41.0%×0.5 |
| 에이전트 | 71.2 | +1.41 | 실측 | [[tau2-bench]] 86.0%×1.0, [[terminal-bench]] 41.0%×1.0 |
| 신뢰성 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 24.0%×1.0 |
| 멀티모달 | 54.8 | +0.32 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 63.4 | +0.89 | 실측 | [[aa-lcr]] 71.0%×1.0 |
| 지시 따르기 | 43.9 | -0.41 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
