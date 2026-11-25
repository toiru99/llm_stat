---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.84
output_speed_tps: 64.1383339201974
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.2, z: 0.46, r: 56.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.9, z: -0.01, r: 49.8, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.3, r: 45.5, estimated: false }  # 코딩
  agentic: { s: 60.6, z: 0.48, r: 57.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.7, z: 0.17, r: 52.5, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.43, r: 56.5, estimated: false }  # 긴문맥
  instruction: { s: 54.8, z: 0.18, r: 52.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $0.84/1M · 64.1383339201974 t/s · TTFT 3.10820944447054s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 56.9 | +0.46 | 실측 | [[gpqa-diamond]] 82.6263%×0.4, [[humanitys-last-exam]] 14.8749%×0.3 |
| 추론 | 49.8 | -0.01 | 실측 | [[critpt]] 0.563265%×1.0, [[gpqa-diamond]] 82.6263%×1.0, [[humanitys-last-exam]] 14.8749%×1.0 |
| 코딩 | 45.5 | -0.3 | 실측 | [[terminal-bench]] 21.2121%×0.5 |
| 에이전트 | 57.2 | +0.48 | 실측 | [[tau2-bench]] 88.3041%×1.0, [[terminal-bench]] 21.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.5 | +0.17 | 실측 | [[mmmu-pro]] 70.5202%×1.0 |
| 긴문맥 | 56.5 | +0.43 | 실측 | [[aa-lcr]] 63.6667%×1.0 |
| 지시 따르기 | 52.7 | +0.18 | 실측 | [[ifbench]] 51.1565%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
