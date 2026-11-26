---
type: Model
title: Claude Opus 4.7 (non-reasoning, high)
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.85
output_speed_tps: 77.0643009515285
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 70.9, z: 1.17, r: 67.6, estimated: false }  # 전문 지식
  reasoning: { s: 49.8, z: 0.73, r: 60.9, estimated: false }  # 추론
  coding: { s: 82.8, z: 1.41, r: 71.1, estimated: false }  # 코딩
  agentic: { s: 78.7, z: 1.11, r: 66.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.5, z: 0.57, r: 58.5, estimated: false }  # 멀티모달
  long_context: { s: 85.3, z: 0.85, r: 62.7, estimated: false }  # 긴문맥
  instruction: { s: 44.2, z: -0.26, r: 46.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude Opus 4.7 (non-reasoning, high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Claude Opus 4.7 (non-reasoning, high)

Anthropic · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $5.0 · 출력 $25.0 · 혼합 $3.85/1M · 77.0643009515285 t/s · TTFT 1.38377137959994s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 67.6 | +1.17 | 실측 | [[gpqa-diamond]] 88.4848%×0.4, [[humanitys-last-exam]] 33.3179%×0.3 |
| 추론 | 60.9 | +0.73 | 실측 | [[critpt]] 5.14286%×1.0, [[gpqa-diamond]] 88.4848%×1.0, [[humanitys-last-exam]] 33.3179%×1.0 |
| 코딩 | 71.1 | +1.41 | 실측 | [[terminal-bench]] 54.5455%×0.5 |
| 에이전트 | 66.7 | +1.11 | 실측 | [[tau2-bench]] 73.9766%×1.0, [[terminal-bench]] 54.5455%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.5 | +0.57 | 실측 | [[mmmu-pro]] 76.3584%×1.0 |
| 긴문맥 | 62.7 | +0.85 | 실측 | [[aa-lcr]] 75.6667%×1.0 |
| 지시 따르기 | 46.1 | -0.26 | 실측 | [[ifbench]] 43.6054%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
