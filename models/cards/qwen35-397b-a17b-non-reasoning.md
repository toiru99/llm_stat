---
type: Model
title: Qwen3.5 397B A17B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 51.1225281146506
context_window: 262144
status: current
size_class: Large
params_b: 397
is_reasoning: false
radar:
  knowledge: { s: 61.4, z: 0.71, r: 60.7, estimated: false }  # 전문 지식
  reasoning: { s: 38.7, z: 0.18, r: 52.7, estimated: false }  # 추론
  coding: { s: 54.0, z: 0.44, r: 56.6, estimated: false }  # 코딩
  agentic: { s: 69.3, z: 0.78, r: 61.8, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 50.9, z: -1.05, r: 34.3, estimated: false }  # 멀티모달
  long_context: { s: 72.6, z: 0.45, r: 56.8, estimated: false }  # 긴문맥
  instruction: { s: 55.5, z: 0.21, r: 53.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 397B A17B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.5 397B A17B (non-reasoning)

Alibaba · Open · Large(397B) · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 51.1225281146506 t/s · TTFT 2.71233480762085s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.7 | +0.71 | 실측 | [[gpqa-diamond]] 86.0606%×0.4, [[humanitys-last-exam]] 19.8332%×0.3 |
| 추론 | 52.7 | +0.18 | 실측 | [[critpt]] 0.857143%×1.0, [[gpqa-diamond]] 86.0606%×1.0, [[humanitys-last-exam]] 19.8332%×1.0 |
| 코딩 | 56.6 | +0.44 | 실측 | [[terminal-bench]] 35.6061%×0.5 |
| 에이전트 | 61.8 | +0.78 | 실측 | [[tau2-bench]] 83.9181%×1.0, [[terminal-bench]] 35.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 34.3 | -1.05 | 실측 | [[mmmu-pro]] 52.659%×1.0 |
| 긴문맥 | 56.8 | +0.45 | 실측 | [[aa-lcr]] 64.3333%×1.0 |
| 지시 따르기 | 53.1 | +0.21 | 실측 | [[ifbench]] 51.6327%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
