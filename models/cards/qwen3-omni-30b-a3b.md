---
type: Model
title: Qwen3 Omni 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.322
output_speed_tps: 72.9436992457494
context_window: 65536
status: current
size_class: Small
params_b: 35.3
is_reasoning: false
radar:
  knowledge: { s: 36.6, z: -0.49, r: 42.6, estimated: false }  # 전문 지식
  reasoning: { s: 21.8, z: -0.67, r: 40.0, estimated: false }  # 추론
  coding: { s: 2.3, z: -1.31, r: 30.4, estimated: false }  # 코딩
  agentic: { s: 9.4, z: -1.33, r: 30.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 54.7, z: -0.85, r: 37.2, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 26.7, z: -0.99, r: 35.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3 Omni 30B A3B

Alibaba · Open · Small(35.3B) · 컨텍스트 65k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.322/1M · 72.9436992457494 t/s · TTFT 1.23688418256105s · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.6 | -0.49 | 실측 | [[gpqa-diamond]] 62.0202%×0.4, [[humanitys-last-exam]] 4.63392%×0.3 |
| 추론 | 40.0 | -0.67 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 62.0202%×1.0, [[humanitys-last-exam]] 4.63392%×1.0 |
| 코딩 | 30.4 | -1.31 | 실측 | [[terminal-bench]] 1.51515%×0.5 |
| 에이전트 | 30.1 | -1.33 | 실측 | [[tau2-bench]] 16.3743%×1.0, [[terminal-bench]] 1.51515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 37.2 | -0.85 | 실측 | [[mmmu-pro]] 55.4913%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 35.2 | -0.99 | 실측 | [[ifbench]] 31.1565%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
