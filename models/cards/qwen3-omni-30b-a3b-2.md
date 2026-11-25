---
type: Model
title: Qwen3 Omni 30B A3B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.322
output_speed_tps: 86.6050503071388
context_window: 65536
status: current
size_class: Small
params_b: 35.3
is_reasoning: true
radar:
  knowledge: { s: 45.3, z: -0.07, r: 48.9, estimated: false }  # 전문 지식
  reasoning: { s: 27.1, z: -0.4, r: 44.0, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 13.6, z: -1.18, r: 32.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 61.0, z: -0.53, r: 42.0, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 43.9, z: -0.27, r: 45.9, estimated: false }  # 지시 따르기
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
- **강점**: 전문 지식, 지시 따르기
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.322/1M · 86.6050503071388 t/s · TTFT 1.24200516571918s · 65k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.9 | -0.07 | 실측 | [[gpqa-diamond]] 72.6263%×0.4, [[humanitys-last-exam]] 7.46061%×0.3 |
| 추론 | 44.0 | -0.4 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 72.6263%×1.0, [[humanitys-last-exam]] 7.46061%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 32.3 | -1.18 | 실측 | [[tau2-bench]] 21.345%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 42.0 | -0.53 | 실측 | [[mmmu-pro]] 60.2312%×1.0 |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 45.9 | -0.27 | 실측 | [[ifbench]] 43.4014%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
