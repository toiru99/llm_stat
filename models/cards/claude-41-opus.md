---
type: Model
title: Claude 4.1 Opus
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 11.55
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.7, z: 0.33, r: 55.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.6, z: -0.13, r: 48.1, estimated: false }  # 추론
  coding: { s: 52.1, z: 0.37, r: 55.6, estimated: false }  # 코딩
  agentic: { s: 62.0, z: 0.52, r: 57.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 71.2, z: -0.01, r: 49.9, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 60.8, z: 0.43, r: 56.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 4.1 Opus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Claude 4.1 Opus

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $15.0 · 출력 $75.0 · 혼합 $11.55/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.0 | +0.33 | 실측 | [[gpqa-diamond]] 80.9%×0.4, [[humanitys-last-exam]] 12.4652%×0.3 |
| 추론 | 48.1 | -0.13 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 80.9%×1.0, [[humanitys-last-exam]] 12.4652%×1.0 |
| 코딩 | 55.6 | +0.37 | 실측 | [[terminal-bench]] 34.3352%×0.5 |
| 에이전트 | 57.9 | +0.52 | 실측 | [[tau2-bench]] 71.3661%×1.0, [[terminal-bench]] 34.3352%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.9 | -0.01 | 실측 | [[mmmu-pro]] 67.9191%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 76%×1.0 |
| 지시 따르기 | 56.5 | +0.43 | 실측 | [[ifbench]] 55.4422%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
