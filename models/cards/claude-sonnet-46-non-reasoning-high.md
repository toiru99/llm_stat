---
type: Model
title: Claude Sonnet 4.6 (non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 2.31
output_speed_tps: 56.25847719276
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 53.5, z: 0.33, r: 54.9, estimated: false }  # 전문 지식
  reasoning: { s: 33.4, z: -0.09, r: 48.7, estimated: false }  # 추론
  coding: { s: 70.1, z: 0.98, r: 64.7, estimated: false }  # 코딩
  agentic: { s: 75.2, z: 0.99, r: 64.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.8, z: 0.17, r: 52.6, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 40.8, z: -0.4, r: 44.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Sonnet 4.6 (non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude Sonnet 4.6 (non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $3.0 · 출력 $15.0 · 혼합 $2.31/1M · 56.25847719276 t/s · TTFT 1.75332600462504s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.9 | +0.33 | 실측 | [[gpqa-diamond]] 79.899%×0.4, [[humanitys-last-exam]] 13.3457%×0.3 |
| 추론 | 48.7 | -0.09 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 79.899%×1.0, [[humanitys-last-exam]] 13.3457%×1.0 |
| 코딩 | 64.7 | +0.98 | 실측 | [[terminal-bench]] 46.2121%×0.5 |
| 에이전트 | 64.8 | +0.99 | 실측 | [[tau2-bench]] 79.5322%×1.0, [[terminal-bench]] 46.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.6 | +0.17 | 실측 | [[mmmu-pro]] 70.578%×1.0 |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 68.3333%×1.0 |
| 지시 따르기 | 44.0 | -0.4 | 실측 | [[ifbench]] 41.1565%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
