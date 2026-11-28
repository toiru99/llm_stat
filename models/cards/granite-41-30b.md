---
type: Model
title: Granite 4.1 30B
creator: IBM
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: past
size_class: Small
params_b: 30
is_reasoning: false
radar:
  knowledge: { s: 27.1, z: -0.96, r: 35.6, estimated: false }  # 전문 지식
  reasoning: { s: 16.2, z: -0.94, r: 35.8, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 24.1, z: -0.81, r: 37.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 26.7, z: -0.95, r: 35.8, estimated: false }  # 긴문맥
  instruction: { s: 45.3, z: -0.21, r: 46.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Granite 4.1 30B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# Granite 4.1 30B

IBM · Open · Small(30B) · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 35.6 | -0.96 | 실측 | [[gpqa-diamond]] 48.0808%×0.4, [[humanitys-last-exam]] 4.12419%×0.3 |
| 추론 | 35.8 | -0.94 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 48.0808%×1.0, [[humanitys-last-exam]] 4.12419%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 37.8 | -0.81 | 실측 | [[gdpval]] 195.15 Elo×1.0, [[tau2-bench]] 42.1053%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 35.8 | -0.95 | 실측 | [[aa-lcr]] 23.6667%×1.0 |
| 지시 따르기 | 46.8 | -0.21 | 실측 | [[ifbench]] 44.3537%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
