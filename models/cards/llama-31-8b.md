---
type: Model
title: Llama 3.1 8B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.053
output_speed_tps: 128.2803454769605
context_window: 128000
status: past
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 13.1, z: -1.64, r: 25.4, estimated: false }  # 전문 지식
  reasoning: { s: 8.1, z: -1.34, r: 29.8, estimated: false }  # 추론
  coding: { s: 1.1, z: -1.35, r: 29.8, estimated: false }  # 코딩
  agentic: { s: 6.2, z: -1.44, r: 28.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 20.3, z: -1.15, r: 32.8, estimated: false }  # 긴문맥
  instruction: { s: 23.1, z: -1.14, r: 33.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.1 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Llama 3.1 8B

Meta · Open · Small(8B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $0.05 · 출력 $0.08 · 혼합 $0.053/1M · 128.2803454769605 t/s · TTFT 1.0664797130305435s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 25.4 | -1.64 | 실측 | [[gpqa-diamond]] 25.8586%×0.4, [[humanitys-last-exam]] 5.29%×0.3 |
| 추론 | 29.8 | -1.34 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 25.8586%×1.0, [[humanitys-last-exam]] 5.29%×1.0 |
| 코딩 | 29.8 | -1.35 | 실측 | [[terminal-bench]] 0.757576%×0.5 |
| 에이전트 | 28.4 | -1.44 | 실측 | [[gdpval]] -379.93 Elo×1.0, [[tau2-bench]] 16.3743%×1.0, [[terminal-bench]] 0.757576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 32.8 | -1.15 | 실측 | [[aa-lcr]] 18%×1.0 |
| 지시 따르기 | 33.0 | -1.14 | 실측 | [[ifbench]] 28.5714%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
