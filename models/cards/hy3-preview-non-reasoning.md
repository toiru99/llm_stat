---
type: Model
title: Hy3-preview (non-reasoning)
creator: Tencent
license: Open
intelligence_index: None
price_blended_usd_1m: 0.0483
output_speed_tps: None
context_window: 256000
status: past
size_class: Large
params_b: 295
is_reasoning: false
radar:
  knowledge: { s: 45.4, z: -0.07, r: 49.0, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 58.2, z: 0.39, r: 55.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.4, z: -0.32, r: 45.2, estimated: false }  # 긴문맥
  instruction: { s: 50.3, z: -0.0, r: 49.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Hy3-preview (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Hy3-preview (non-reasoning)

Tencent · Open · Large(295B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.063 · 출력 $0.21 · 혼합 $0.0483/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.0 | -0.07 | 실측 | [[gpqa-diamond]] 73.2323%×0.4, [[humanitys-last-exam]] 6.95088%×0.3 |
| 추론 | 44.2 | -0.39 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 73.2323%×1.0, [[humanitys-last-exam]] 6.95088%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.8182%×0.5 |
| 에이전트 | 55.9 | +0.39 | 실측 | [[tau2-bench]] 67.5439%×1.0, [[terminal-bench]] 31.8182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.2 | -0.32 | 실측 | [[aa-lcr]] 42%×1.0 |
| 지시 따르기 | 49.9 | +-0.0 | 실측 | [[ifbench]] 47.9592%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
