---
type: Model
title: Olmo 3 32B Think
creator: Allen Institute for AI
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 65536
status: past
size_class: Small
params_b: 32.2
is_reasoning: true
radar:
  knowledge: { s: 37.0, z: -0.48, r: 42.9, estimated: false }  # 전문 지식
  reasoning: { s: 22.2, z: -0.64, r: 40.3, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 1.1, z: -1.62, r: 25.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 52.0, z: 0.06, r: 50.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Olmo 3 32B Think
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Olmo 3 32B Think

Allen Institute for AI · Open · Small(32.2B) · 컨텍스트 65k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.9 | -0.48 | 실측 | [[gpqa-diamond]] 61.0101%×0.4, [[humanitys-last-exam]] 6.44115%×0.3 |
| 추론 | 40.3 | -0.64 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 61.0101%×1.0, [[humanitys-last-exam]] 6.44115%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 25.7 | -1.62 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 50.9 | +0.06 | 실측 | [[ifbench]] 49.1156%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
