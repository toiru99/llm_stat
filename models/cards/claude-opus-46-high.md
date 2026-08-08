---
type: Model
title: Claude Opus 4.6 (high)
creator: Anthropic
license: Proprietary
intelligence_index: 39.0
price_blended_usd_1m: 3.85
output_speed_tps: 38.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 68.0, z: 1.3, r: 69.6, estimated: false }  # 전문 지식
  reasoning: { s: 43.6, z: 0.43, r: 56.5, estimated: false }  # 추론
  coding: { s: 75.4, z: 1.16, r: 67.4, estimated: false }  # 코딩
  agentic: { s: 79.3, z: 1.73, r: 76.0, estimated: false }  # 에이전트
  trust: { s: 20.9, z: -0.25, r: 46.3, estimated: false }  # 신뢰성
  multimodal: { s: 82.9, z: 0.53, r: 58.0, estimated: false }  # 멀티모달
  long_context: { s: 74.7, z: 0.77, r: 61.6, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.29, r: 45.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.6 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-08
timestamp: 2026-08-08T00:00:00Z
---

# Claude Opus 4.6 (high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **39.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 38.0 t/s · TTFT 2.73s · 1M ctx` · 가성비 10.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 69.6 | +1.3 | 실측 | [[aa-omniscience]] 46.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 19.0%×0.3 |
| 추론 | 56.5 | +0.43 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 19.0%×1.0 |
| 코딩 | 67.4 | +1.16 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 48.0%×0.5 |
| 에이전트 | 76.0 | +1.73 | 실측 | [[tau2-bench]] 85.0%×1.0, [[terminal-bench]] 48.0%×1.0 |
| 신뢰성 | 46.3 | -0.25 | 실측 | [[aa-omniscience]] 20.0%×1.0 |
| 멀티모달 | 58.0 | +0.53 | 실측 | [[mmmu-pro]] 73.0%×1.0 |
| 긴문맥 | 61.6 | +0.77 | 실측 | [[aa-lcr]] 62.0%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
