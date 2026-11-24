---
type: Model
title: Qwen3.5 Omni Flash
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.17
output_speed_tps: 140.282934370735
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 46.4, z: -0.02, r: 49.7, estimated: false }  # 전문 지식
  reasoning: { s: 27.8, z: -0.36, r: 44.5, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.96, r: 35.6, estimated: false }  # 코딩
  agentic: { s: 48.9, z: 0.07, r: 51.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.0, z: -0.22, r: 46.6, estimated: false }  # 멀티모달
  long_context: { s: 58.6, z: 0.03, r: 50.4, estimated: false }  # 긴문맥
  instruction: { s: 36.3, z: -0.59, r: 41.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.5 Omni Flash

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 지시 따르기, 코딩

## 실용 지표
`입력 $0.1 · 출력 $0.8 · 혼합 $0.17/1M · 140.282934370735 t/s · TTFT 3.06326707780726s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 49.7 | -0.02 | 실측 | [[gpqa-diamond]] 74.2424%×0.4, [[humanitys-last-exam]] 7.59963%×0.3 |
| 추론 | 44.5 | -0.36 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 74.2424%×1.0, [[humanitys-last-exam]] 7.59963%×1.0 |
| 코딩 | 35.6 | -0.96 | 실측 | [[terminal-bench]] 8.33333%×0.5 |
| 에이전트 | 51.0 | +0.07 | 실측 | [[tau2-bench]] 84.5029%×1.0, [[terminal-bench]] 8.33333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.6 | -0.22 | 실측 | [[mmmu-pro]] 64.7399%×1.0 |
| 긴문맥 | 50.4 | +0.03 | 실측 | [[aa-lcr]] 52%×1.0 |
| 지시 따르기 | 41.2 | -0.59 | 실측 | [[ifbench]] 37.9592%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
