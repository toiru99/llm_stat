---
type: Model
title: Ling-flash-2.0
creator: InclusionAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.183
output_speed_tps: 33.1675345764319
context_window: 128000
status: past
size_class: Medium
params_b: 103
is_reasoning: false
radar:
  knowledge: { s: 39.9, z: -0.33, r: 45.0, estimated: false }  # 전문 지식
  reasoning: { s: 23.9, z: -0.56, r: 41.6, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 18.5, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 19.9, z: -1.16, r: 32.6, estimated: false }  # 긴문맥
  instruction: { s: 31.2, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Ling-flash-2.0
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Ling-flash-2.0

InclusionAI · Open · Medium(103B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.14 · 출력 $0.57 · 혼합 $0.183/1M · 33.1675345764319 t/s · TTFT 3.81329171351174s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.0 | -0.33 | 실측 | [[gpqa-diamond]] 65.6566%×0.4, [[humanitys-last-exam]] 6.20945%×0.3 |
| 추론 | 41.6 | -0.56 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.6566%×1.0, [[humanitys-last-exam]] 6.20945%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 10.6061%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[tau2-bench]] 20.7602%×1.0, [[terminal-bench]] 10.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.6 | -1.16 | 실측 | [[aa-lcr]] 17.6667%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 34.3537%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
