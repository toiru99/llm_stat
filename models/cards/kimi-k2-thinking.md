---
type: Model
title: Kimi K2 Thinking
creator: Kimi
license: Open
intelligence_index: None
price_blended_usd_1m: 0.79
output_speed_tps: 103.094871364499
context_window: 256000
status: past
size_class: Large
params_b: 1000
is_reasoning: true
radar:
  knowledge: { s: 62.3, z: 0.75, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 41.3, z: 0.31, r: 54.6, estimated: false }  # 추론
  coding: { s: 47.1, z: 0.2, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 0.82, r: 62.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 81.2, z: 0.72, r: 60.8, estimated: false }  # 긴문맥
  instruction: { s: 78.6, z: 1.17, r: 67.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Kimi K2 Thinking
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Kimi K2 Thinking

Kimi · Open · Large(1000B) · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.6 · 출력 $2.5 · 혼합 $0.79/1M · 103.094871364499 t/s · TTFT 2.65624951887508s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.75 | 실측 | [[gpqa-diamond]] 83.8384%×0.4, [[humanitys-last-exam]] 23.8184%×0.3 |
| 추론 | 54.6 | +0.31 | 실측 | [[critpt]] 2.57143%×1.0, [[gpqa-diamond]] 83.8384%×1.0, [[humanitys-last-exam]] 23.8184%×1.0 |
| 코딩 | 53.1 | +0.2 | 실측 | [[terminal-bench]] 31.0606%×0.5 |
| 에이전트 | 62.4 | +0.82 | 실측 | [[tau2-bench]] 92.9825%×1.0, [[terminal-bench]] 31.0606%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 60.8 | +0.72 | 실측 | [[aa-lcr]] 72%×1.0 |
| 지시 따르기 | 67.6 | +1.17 | 실측 | [[ifbench]] 68.0952%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
