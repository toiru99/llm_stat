---
type: Model
title: Qwen3 14B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.132
output_speed_tps: 44.3650978522398
context_window: 32768
status: past
size_class: Small
params_b: 14.8
is_reasoning: true
radar:
  knowledge: { s: 35.5, z: -0.55, r: 41.8, estimated: false }  # 전문 지식
  reasoning: { s: 21.1, z: -0.7, r: 39.5, estimated: false }  # 추론
  coding: { s: 27.9, z: -0.44, r: 43.4, estimated: false }  # 코딩
  agentic: { s: 17.0, z: -1.06, r: 34.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 39.9, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 14B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3 14B

Alibaba · Open · Small(14.8B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.12 · 출력 $0.24 · 혼합 $0.132/1M · 44.3650978522398 t/s · TTFT 0.528789475194711s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.8 | -0.55 | 실측 | [[gpqa-diamond]] 60.404%×0.4, [[humanitys-last-exam]] 4.53%×0.3 |
| 추론 | 39.5 | -0.7 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 60.404%×1.0, [[humanitys-last-exam]] 4.53%×1.0 |
| 코딩 | 43.4 | -0.44 | 실측 | [[scicode]] 30.6713%×1.0, [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 34.1 | -1.06 | 실측 | [[gdpval]] -17.55 Elo×1.0, [[tau2-bench]] 34.5029%×1.0, [[tau3-banking]] 5.56701%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 40.5442%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
