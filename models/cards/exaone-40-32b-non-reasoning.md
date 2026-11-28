---
type: Model
title: EXAONE 4.0 32B (non-reasoning)
creator: LG AI Research
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131000
status: past
size_class: Small
params_b: 32
is_reasoning: false
radar:
  knowledge: { s: 37.4, z: -0.46, r: 43.1, estimated: false }  # 전문 지식
  reasoning: { s: 22.2, z: -0.64, r: 40.4, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 3.2, z: -1.55, r: 26.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: null, z: null, r: null, estimated: false }  # 긴문맥
  instruction: { s: 30.0, z: -0.85, r: 37.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — EXAONE 4.0 32B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# EXAONE 4.0 32B (non-reasoning)

LG AI Research · Open · Small(32B) · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 43.1 | -0.46 | 실측 | [[gpqa-diamond]] 62.8283%×0.4, [[humanitys-last-exam]] 5.00463%×0.3 |
| 추론 | 40.4 | -0.64 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 62.8283%×1.0, [[humanitys-last-exam]] 5.00463%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 26.8 | -1.55 | 실측 | [[tau2-bench]] 4.09357%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | — | — | 측정 안 됨 | — |
| 지시 따르기 | 37.2 | -0.85 | 실측 | [[ifbench]] 33.4694%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
