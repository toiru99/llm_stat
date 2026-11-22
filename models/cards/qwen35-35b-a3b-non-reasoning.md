---
type: Model
title: Qwen3.5 35B A3B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.425
output_speed_tps: 116.324172650749
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 54.9, z: 0.37, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.08, r: 48.8, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.81, r: 37.8, estimated: false }  # 코딩
  agentic: { s: 39.3, z: -0.19, r: 47.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.9, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.52, r: 57.7, estimated: false }  # 긴문맥
  instruction: { s: 45.5, z: -0.35, r: 44.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-22
timestamp: 2026-11-22T00:00:00Z
---

# Qwen3.5 35B A3B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 116.324172650749 t/s · TTFT 3.65885983478332s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.37 | 실측 | [[gpqa-diamond]] 81.9191919191919%×0.4, [[humanitys-last-exam]] 13.438368860055599%×0.3 |
| 추론 | 48.8 | -0.08 | 실측 | [[critpt]] 0.571428571428571%×1.0, [[gpqa-diamond]] 81.9191919191919%×1.0, [[humanitys-last-exam]] 13.438368860055599%×1.0 |
| 코딩 | 37.8 | -0.81 | 실측 | [[terminal-bench]] 10.6060606060606%×0.5 |
| 에이전트 | 47.1 | -0.19 | 실측 | [[gdpval]] 616.02%×1.0, [[tau2-bench]] 86.2573099415205%×1.0, [[tau3-banking]] 4.948453608247419%×1.0, [[terminal-bench]] 10.6060606060606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.19075144508669%×1.0 |
| 긴문맥 | 57.7 | +0.52 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 44.7 | -0.35 | 실측 | [[ifbench]] 44.4897959183673%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
