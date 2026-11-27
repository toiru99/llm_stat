---
type: Model
title: Claude 4.5 Sonnet (non-reasoning)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 60.9170926110588
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 45.2, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 43.7, z: 0.09, r: 51.3, estimated: false }  # 코딩
  agentic: { s: 57.4, z: 0.36, r: 55.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.6, z: -0.19, r: 47.1, estimated: false }  # 멀티모달
  long_context: { s: 60.9, z: 0.1, r: 51.5, estimated: false }  # 긴문맥
  instruction: { s: 42.9, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.5 Sonnet (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Claude 4.5 Sonnet (non-reasoning)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 추론

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 60.9170926110588 t/s · TTFT 1.36737190766941s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[gpqa-diamond]] 72.7273%×0.4, [[humanitys-last-exam]] 7.22892%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 72.7273%×1.0, [[humanitys-last-exam]] 7.22892%×1.0 |
| 코딩 | 51.3 | +0.09 | 실측 | [[terminal-bench]] 28.7879%×0.5 |
| 에이전트 | 55.4 | +0.36 | 실측 | [[tau2-bench]] 70.4678%×1.0, [[terminal-bench]] 28.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.1 | -0.19 | 실측 | [[mmmu-pro]] 65.2023%×1.0 |
| 긴문맥 | 51.5 | +0.1 | 실측 | [[aa-lcr]] 54%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 42.6531%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
