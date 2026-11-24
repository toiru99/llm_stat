---
type: Model
title: MiMo-V2.5-Pro (non-reasoning)
creator: Xiaomi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.1406
output_speed_tps: None
context_window: 1000000
status: past
size_class: Large
params_b: 1000
is_reasoning: false
radar:
  knowledge: { s: 51.9, z: 0.25, r: 53.7, estimated: false }  # 전문 지식
  reasoning: { s: 32.9, z: -0.11, r: 48.3, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.44, r: 56.6, estimated: false }  # 코딩
  agentic: { s: 63.6, z: 0.58, r: 58.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.33, r: 45.1, estimated: false }  # 긴문맥
  instruction: { s: 43.0, z: -0.31, r: 45.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — MiMo-V2.5-Pro (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# MiMo-V2.5-Pro (non-reasoning)

Xiaomi · Open · Large(1000B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $0.348 · 출력 $0.696 · 혼합 $0.1406/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 53.7 | +0.25 | 실측 | [[gpqa-diamond]] 76.1616%×0.4, [[humanitys-last-exam]] 14.7822%×0.3 |
| 추론 | 48.3 | -0.11 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 76.1616%×1.0, [[humanitys-last-exam]] 14.7822%×1.0 |
| 코딩 | 56.6 | +0.44 | 실측 | [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 58.7 | +0.58 | 실측 | [[tau2-bench]] 72.5146%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.1 | -0.33 | 실측 | [[aa-lcr]] 41.6667%×1.0 |
| 지시 따르기 | 45.3 | -0.31 | 실측 | [[ifbench]] 42.7211%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
