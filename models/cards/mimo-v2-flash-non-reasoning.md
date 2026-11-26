---
type: Model
title: MiMo-V2-Flash (non-reasoning)
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 309
is_reasoning: false
radar:
  knowledge: { s: 41.2, z: -0.27, r: 46.0, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.51, r: 42.4, estimated: false }  # 추론
  coding: { s: 39.1, z: -0.07, r: 49.0, estimated: false }  # 코딩
  agentic: { s: 56.5, z: 0.33, r: 55.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.0, z: -0.51, r: 42.3, estimated: false }  # 긴문맥
  instruction: { s: 39.1, z: -0.47, r: 42.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2-Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# MiMo-V2-Flash (non-reasoning)

Xiaomi · Open · Large(309B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 추론, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.0 | -0.27 | 실측 | [[gpqa-diamond]] 65.5556%×0.4, [[humanitys-last-exam]] 8.57275%×0.3 |
| 추론 | 42.4 | -0.51 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.5556%×1.0, [[humanitys-last-exam]] 8.57275%×1.0 |
| 코딩 | 49.0 | -0.07 | 실측 | [[terminal-bench]] 25.7576%×0.5 |
| 에이전트 | 55.0 | +0.33 | 실측 | [[gdpval]] 635.53 Elo×1.0, [[tau2-bench]] 83.9181%×1.0, [[terminal-bench]] 25.7576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.3 | -0.51 | 실측 | [[aa-lcr]] 36.3333%×1.0 |
| 지시 따르기 | 42.9 | -0.47 | 실측 | [[ifbench]] 39.932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
