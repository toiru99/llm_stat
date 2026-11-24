---
type: Model
title: Qwen3 Coder 480B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.4075
output_speed_tps: 77.48324386348625
context_window: 262144
status: past
size_class: Large
params_b: 480
is_reasoning: false
radar:
  knowledge: { s: 36.4, z: -0.5, r: 42.4, estimated: false }  # 전문 지식
  reasoning: { s: 21.6, z: -0.67, r: 39.9, estimated: false }  # 추론
  coding: { s: 28.7, z: -0.42, r: 43.8, estimated: false }  # 코딩
  agentic: { s: 36.3, z: -0.38, r: 44.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 51.5, z: -0.19, r: 47.1, estimated: false }  # 긴문맥
  instruction: { s: 39.8, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder 480B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3 Coder 480B

Alibaba · Open · Large(480B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.375 · 출력 $1.4 · 혼합 $0.4075/1M · 77.48324386348625 t/s · TTFT 2.790061920681942s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 42.4 | -0.5 | 실측 | [[gpqa-diamond]] 61.8182%×0.4, [[humanitys-last-exam]] 4.54124%×0.3 |
| 추론 | 39.9 | -0.67 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 61.8182%×1.0, [[humanitys-last-exam]] 4.54124%×1.0 |
| 코딩 | 43.8 | -0.42 | 실측 | [[terminal-bench]] 18.9394%×0.5 |
| 에이전트 | 44.3 | -0.38 | 실측 | [[tau2-bench]] 43.5673%×1.0, [[terminal-bench]] 18.9394%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 47.1 | -0.19 | 실측 | [[aa-lcr]] 45.6667%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 40.4762%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
