---
type: Model
title: Claude 4 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.3, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 25.1, z: -0.5, r: 42.5, estimated: false }  # 추론
  coding: { s: 41.4, z: 0.01, r: 50.2, estimated: false }  # 코딩
  agentic: { s: 47.1, z: -0.0, r: 50.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 63.8, z: -0.39, r: 44.2, estimated: false }  # 멀티모달
  long_context: { s: 49.6, z: -0.25, r: 46.3, estimated: false }  # 긴문맥
  instruction: { s: 46.7, z: -0.16, r: 47.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude 4 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.3 | 실측 | [[gpqa-diamond]] 68.2828%×0.4, [[humanitys-last-exam]] 4.26321%×0.3 |
| 추론 | 42.5 | -0.5 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 68.2828%×1.0, [[humanitys-last-exam]] 4.26321%×1.0 |
| 코딩 | 50.2 | +0.01 | 실측 | [[terminal-bench]] 27.2727%×0.5 |
| 에이전트 | 50.0 | +-0.0 | 실측 | [[tau2-bench]] 52.3392%×1.0, [[terminal-bench]] 27.2727%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 44.2 | -0.39 | 실측 | [[mmmu-pro]] 62.3699%×1.0 |
| 긴문맥 | 46.3 | -0.25 | 실측 | [[aa-lcr]] 44%×1.0 |
| 지시 따르기 | 47.7 | -0.16 | 실측 | [[ifbench]] 45.3741%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
