---
type: Model
title: Sarvam M
creator: Sarvam
license: Open
intelligence_index: None
price_blended_usd_1m: 0
output_speed_tps: None
context_window: 32768
status: past
size_class: Small
params_b: 23.6
is_reasoning: true
radar:
  knowledge: { s: 22.2, z: -1.19, r: 32.1, estimated: false }  # 전문 지식
  reasoning: { s: 13.2, z: -1.09, r: 33.6, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 1.7, z: -1.6, r: 26.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 27.7, z: -0.95, r: 35.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Sarvam M
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Sarvam M

Sarvam · Open · Small(23.6B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.0 · 출력 $0.0 · 혼합 $0/1M · None t/s · TTFT Nones · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 32.1 | -1.19 | 실측 | [[gpqa-diamond]] 41.6162%×0.4, [[humanitys-last-exam]] 3.10473%×0.3 |
| 추론 | 33.6 | -1.09 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 41.6162%×1.0, [[humanitys-last-exam]] 3.10473%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 26.0 | -1.6 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 35.8 | -0.95 | 실측 | [[ifbench]] 31.8367%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
