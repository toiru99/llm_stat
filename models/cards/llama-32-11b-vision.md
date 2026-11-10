---
type: Model
title: Llama 3.2 11B (Vision)
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.345
output_speed_tps: None
context_window: 128000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 10.7, z: -1.75, r: 23.8, estimated: false }  # 전문 지식
  reasoning: { s: 10.1, z: -1.62, r: 25.7, estimated: false }  # 추론
  coding: { s: 1.2, z: -1.22, r: 31.7, estimated: false }  # 코딩
  agentic: { s: 1.2, z: -1.14, r: 32.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 18.9, z: -2.65, r: 10.2, estimated: false }  # 멀티모달
  long_context: { s: 14.3, z: -1.16, r: 32.6, estimated: false }  # 긴문맥
  instruction: { s: 25.7, z: -1.17, r: 32.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3.2 11B (Vision)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Llama 3.2 11B (Vision)

Meta · Open · Small · 컨텍스트 128k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.34 · 출력 $0.34 · 혼합 $0.345/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 23.8 | -1.75 | 실측 | [[gpqa-diamond]] 22.1%×0.4, [[humanitys-last-exam]] 5.5%×0.3 |
| 추론 | 25.7 | -1.62 | 실측 | [[gpqa-diamond]] 22.1%×1.0, [[humanitys-last-exam]] 5.5%×1.0 |
| 코딩 | 31.7 | -1.22 | 실측 | [[terminal-bench]] 0.8%×0.5 |
| 에이전트 | 32.9 | -1.14 | 실측 | [[terminal-bench]] 0.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 10.2 | -2.65 | 실측 | [[mmmu-pro]] 29.0%×1.0 |
| 긴문맥 | 32.6 | -1.16 | 실측 | [[aa-lcr]] 12.7%×1.0 |
| 지시 따르기 | 32.5 | -1.17 | 실측 | [[ifbench]] 30.4%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
