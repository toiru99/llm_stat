---
type: Model
title: Qwen3 8B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 131072
status: past
size_class: Small
params_b: 8.2
is_reasoning: true
radar:
  knowledge: { s: 34.1, z: -0.62, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 20.2, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.57, r: 41.4, estimated: false }  # 코딩
  agentic: { s: 14.1, z: -1.16, r: 32.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 30.0, z: -0.85, r: 37.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3 8B

Alibaba · Open · Small(8.2B) · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.62 | 실측 | [[gpqa-diamond]] 58.8889%×0.4, [[humanitys-last-exam]] 3.89%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 58.8889%×1.0, [[humanitys-last-exam]] 3.89%×1.0 |
| 코딩 | 41.4 | -0.57 | 실측 | [[scicode]] 27.8935%×1.0, [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 32.5 | -1.16 | 실측 | [[gdpval]] -41.45 Elo×1.0, [[tau2-bench]] 27.7778%×1.0, [[tau3-banking]] 4.74227%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 37.2 | -0.85 | 실측 | [[ifbench]] 33.4694%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
